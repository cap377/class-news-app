import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

let token = "xoxp-201484241093-202931719879-213968136212-115603c2e63ec46bdbb54b5bc676dce2";


@Injectable()
export class SlackService {
  //Global URL Variables used for slack api calls
  private CHANNELS_LIST_URL = "https://slack.com/api/channels.list?token=" + token;
  private CHANNELS_HISTORY_URL = "https://slack.com/api/channels.history?token=" + token;
  private USER_URL = 'https://slack.com/api/users.list?presence=true&token=' + token;
  private USER_IDENTITY_URL = 'https://slack.com/api/users.info?token=' + token;

  //Global variables holding the data used for other applicants
  private CHANNEL_DATA = [];
  private MEMBER_INFO = [];

  //constructor
  constructor(private http: Http) { }

  //this function gets the users information based on the user ID
  private getUserIdentity(userID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.USER_IDENTITY_URL + userID)
        .subscribe((res) => {
          let userData = res.json();
          //console.log(userData.user.real_name);
          resolve(userData.user.real_name);        //only returning the name
        });
    });
  }

  //This function makes the API call to get the messages and reactions
  //takes that data and parses out the data into a Javascript object
  //to be passed back to callChannels
  private getMessages(completeURL: string): Promise<any> {
    let messageResults;
    let reactionResults = [];
    let counter = 0;

    let messagesParsed = [];
    let datePipe: DatePipe = new DatePipe('en-US');

    return new Promise((resolve, reject) => {
      this.http.get(completeURL)                                                                            //makes the api call to get channel history
        .subscribe((res) => {                                                                       //subscribes the results
          let latestCounter = 0;                                                                     //counter to keep track of how many latest messages there are
          let latestLimit = (Date.now() - 604800000.00) / 1000;                                       //The limit is set for one week
          messageResults = res.json();                                                              //takes the Json object



          for (let messageIndex = 0; messageIndex < messageResults.messages.length; messageIndex++) {
            if (!messageResults.messages[messageIndex].subtype) {                                       //makes sure the message is only text. doesn't include uploads and channel updates
              if (latestLimit < messageResults.messages[messageIndex].ts)                             //checks to see if the value is a recent message
                latestCounter++;

              this.getUserIdentity(messageResults.messages[messageIndex].user).then((name) => {
                messagesParsed.push({                                                                //using push functionality since I don't know know exactly what spaces are going to have messages or subtypes
                  text: messageResults.messages[messageIndex].text,
                  time: datePipe.transform(messageResults.messages[messageIndex].ts, 'shortTime'),   //converts timestamp to the short time format "HH:mm AM/PM"
                  //time:messageResults.messages[messageIndex].ts,
                  name: name,
                  reactions: []
                });


                counter++;

                if (messageResults.messages[messageIndex].reactions) {                                  //checks to see if there is reactions
                  for (let reactionsIndex = 0; reactionsIndex < messageResults.messages[messageIndex].reactions.length; reactionsIndex++) {
                    reactionResults.push({
                      name: messageResults.messages[messageIndex].reactions[reactionsIndex].name,
                      count: messageResults.messages[messageIndex].reactions[reactionsIndex].count
                    })
                    //console.log("REACTIONS : ",reactionResults);
                  }
                  messagesParsed[counter - 1].reactions = reactionResults;                              //adds reactions to the message array
                }
              });
            }
          }

          resolve({ count: latestCounter, messages: messagesParsed });
          reject(Error("MESSAGE CALL COULD NOT BE COMPLETED"));
        });
    });
  }

  //Makes the API call to retrieve the list of channels
  //Parses the channel data out into a javascript object
  public getChannelsAndMessages(): Promise<any> {
    let channelResults;
    let messageResults;
    let messageParsed;
    let latestMessageTime;

    return new Promise((resolve, reject) => {       //creating the promise
      this.http.get(this.CHANNELS_LIST_URL)          //retriving the observable response data type and making the API call
        .subscribe((res) => {             //subscribe acts similar to the .then of a promise
          channelResults = res.json();                //getting the json response
          //console.log(channelResults);                //logging results

          for (let channelIndex = 0; channelIndex < channelResults.channels.length; channelIndex++) {
            let completeURL = this.CHANNELS_HISTORY_URL + channelResults.channels[channelIndex].id;   //combining the url with the id to get specific channel information

            this.getMessages(completeURL).then((data) => {       //a promise that is made to fill out the messages

              this.CHANNEL_DATA[channelIndex] = {
                id: channelResults.channels[channelIndex].id,
                name: channelResults.channels[channelIndex].name,
                recentCount: data.count,
                messages: data.messages
              }
            });
          }

          console.log(this.CHANNEL_DATA);     //logging console data
          resolve(this.CHANNEL_DATA);        //sending resolved data structured correctly
          reject(Error("Call could not be made"));
        });
    });
  }

  //this function makes a call to the user API to gather information
  //that information is then parsed into an easily passed js object
  public getUsers() {
    let userInfo;

    return new Promise((resolve, reject) => {                              //returning a promise to make sure it's an async call
      this.http.get(this.USER_URL)                                         //Call the USER api method from slack
        .subscribe((res) => {
          userInfo = res.json();

          for (let index = 0; index < userInfo.members.length; index++) {  //loops through the information and collects essential information as a js object
            this.MEMBER_INFO[index] = {
              name: userInfo.members[index].real_name,
              id: userInfo.members[index].id,
              email: userInfo.members[index].profile.email,
              picture: userInfo.members[index].profile.image_192,
              presence: userInfo.members[index].presence
            };
          }

          console.log(this.MEMBER_INFO);                                   //logs all the member information into the console
          resolve(this.MEMBER_INFO);
          reject(Error("Could not retrieve API"));
        })
    })
  }
}
