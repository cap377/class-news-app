import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {
  //members: Member[];
 pupImage:string='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhISEhIVEA8VFRcVEhAQEA8QFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD0QAAEDAwIDBgQDBgUFAQAAAAEAAhEDBCESMQVBUQYiYXGRsROBocEyctEUM0JSYvAjgpKy8UNTs8LhB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgEDAgQEBwEAAAAAAAAAAQIRIQMSMQRBBSJRYRMUMpFCUnGBwdHwM//aAAwDAQACEQMRAD8A6ZKE2pSBXxe41IuaoAIhKE9ye4AiQKrfERGOTsQYobmIgTwqHRWdQCb4AVghQckIgKYT6AlCmEUBENTpEpg5KhihRIU0imIEQmhEJUS5ICBam0pzUTB6TYiQUwhykHJWMmVBzUi5CL0sgGa1PCCHFTEpZAkQoJEJiFNsCUJBiiFNrk6AYhQLlN6E5qaSAl8RJD0p1doC60oiZoRNKiigZUSxGLFJ1IjkVKT7BRTNJEYxGhMXK7EKE0qLqihqRuGFUSkHJ2gkwASeg3KcXYh6dMuwAStqw4A54l3dC1eB8G+ENb8vPL+UdFquqcl7fS+HqlLU+xNnOXHZk/wkTG2yja9lTvUeAOgyfquoJQ31F1/IaN3QW2ZtPs7QA2J8S7dOOzlv0dv/ADH0V34iY11r8to/lX2Az6/ZiidtTfIz7rNrdkHT3agjxBkLoxXQLi+jnAUT6PQfMfsCTMxnZGnEFxceu30WbxTsw6m3UzvZyMn0XUUL2QCDKsMuAVE+i0ZxpKgyjzJ9EgwQQfuo6V6JfcHpVpMQ6Bkbrm7/ALPPpmR3m52kn5wvI1+h1NLKVoayc/pS+GrRpQlpC4tw6K2hSARnNUNKlsKIEKJCNpUS1RYAC0pw1HDUtKpSQUD0ptCmVEqWwIaU6SSncBeATyo6ki5auQyxat1OA8QurpWjC0AgEQuY4U8a1uXNctbI6L1fD1FQcmVFXgpcT4UBLmeiwHrbs+JanQeZhGv+Cau9T58lHU9LvW/SX7DnpuJzSirde0eww5pCrOC8txksNGYgun7N2zWMdWeB4YMiOkrmrdsuaN5IW9xy5PdoMEhoExnMLv8ADtNbnqPtx+pUIbnQqnHnl8EECYAXQ27iMnouP4XZu+I0uBiZyCNl0lzdgBe/oTco2yteKjKkXqlwq5rrJdfSpC4la7jKjQdWUDXVF1dValyQluHRsGt4oNyRHMj0VBl0iCvPNO7FRm8Lvy2q6k7GcZOfX+8LaF5GCuZ41/huFUTjeGyY9VqUKwqMDhnH+odVnHHlNJZya1PiBHNFHERU1MJyWmPMLmrq4gboPCrsl5dtpbnnnYKNWaUcjjG8kazsnzPRD1KNd8uJ6koetfHtu3RmGSlDa9TASbYEiVBTTEJZGMCkSmhIpqwGcEgEJ74URURyILCSFrSSAOKiZ1VUDVUS8lU4yEadpdhrgfFddRioweIXneVtcN4w6nAiQu7ouoWlanwVF0XryydTfIGJWlYcWIEFSt+LU6oh2PNRq8NacsK9bTkudN2jo3KSyarbtjxDgCqV3wSlUktOk/RZzqb2bolK9IWz2aiqaIcPQBb8JfSqsJALdW/QIJqudVqanOI1nAJA3XQ2t/OCsypwp5ruc38DzIPJvWVl8utNVp8Nl6LUW7C0KgbyAx1d+qr3j25LnADz+6bjdJ1Ej+UzHyC887d9oqtGm0MYJeX95wlrBGAGjdx6ldUJUlFmU8tyO2pXLSSAZwifFXk3Yji9xUq/Dy6YPg2V6va2xDRO60y8E4JGpzWbxTiIZG2/PYDmZWq+2xC8y7ftuJ+G0HS7AORPWENMFR2tjxuk+M7nBg6fU4Ws2sOR9V4Tw79rY8NpgtxBES1w/qHPzXqnZ+hXbTHxX6j47xyTdoXJvXrdTSJ5FY/Cr40iaRyGnH5TsrtZ7og/Rc+8EVTG0ELHUnVMuC7Gpxa53jPTr0wrdrR+FS0n8boLvsFmcLIfVaSJDAXf5hsPWFq1XyZXleIdQ15UVJ0qK1VVnkq2+FXdC8mLSMqIUyVZpuQmwiArN8hQaUiUMPTF6WRk9ScFVH1lAXKSk+CbLVRiDoSFxKRqItoB4TqIqhJOwGbbogtlYS1rVzYUA/Z05owrDXJnEKdwUVHYRLbib6ZwSR5p3sQ/gIi3F3FgdNYcdY+A8QVZurRrhqauUZSWjY3rmEAnur1tHrX9Op9y4yZcDi0rSs7ooTmseJa4ShW9J2qF6unOy2i12kaTRa4jZ4+uFxPGOGtrAAtkY3wvQeK2xdbPG50z6LiLetMat5AA5k7K5OpUyFwG7M8Cp0QdLA0mJxuOi6BzWjoqt9fst294gCOuZXHcS7WgmWuZz/ikrpisGbyzvS0RyWNxnhraohwnIIPQrD4H2r+KQwEB43nm3qF1BdImQfZDyCwYjeGtbBAA+WEc1dI2T17nTghZ9e4B2Kxk6L5LJqzKq2dvNUeaixxWlwunqqNxzWEvMUsF2j2eZbmtVDiWPa3S3YsySQeomFjVqi7biH7vlEZkE+y42tSkmNpPX7rxvEYpTVEyZSdVKiwEq4aICm1gC83ckiSs2mVLSrBUAUbkMCUNxKtPCi1gUqaGUXtKC9pWq+kguoojOmSzMDzKk6srbrdRfarZzixFE10lYNqmUboiyatSqgmqg1Cnp5ClJtDJftCRuEJ9PKYUij4bFZcp1ZRS5V6NNWQ1KNp5GSoGVYqNEKq3Cn8RdPKKTLFgHawBO67G0obGFm8Dshp1EZW/QYvf8P0HGFy7iboMW4hcRf8ACWtuWkDuatYEbECYnzXcrn+0NKC1/Q5xsF3a0eGKD5R5D/8ArV3UAY+me7qcDHLaJXmDrx/ImV6b21dqL2OyCTPLHIrzp/DhrGYaTufoJTjO0NrJudj6rjVa4mCBvPLovWLTiW2kSANyYA6/NeP8MJpOxy+a7bhN+HAHVnxOybkKjreIVARM8lm0SNzt6rO4jxB1UCnTIIB77t9PhHNWabsASuebRSTLWouONl1PZa3BMnwXOW1NdZ2fdpUwjbtlN4NLj1rLMDYeGy46njffK9BqsDmnnjmuN4zQ0ugR8hC87xTQp/FRCyjLcZTNEmFM04StzpdJXjQgrVhZCpSIQn4WhdOBCpkSrnCKdDBakg5TdCZzcLmaUWFjGshOrKGjKm6grpNYCydN6I0yhspwisaltzkQ/wAJJElJaUh0VX0VCnTViq5Ca5RLHBJPQpaQm1IbpVtyAKXBIPQSCVOnTWsYNrIiTnLS4DafEeJyAs4sXY9maQDAYj3XZ0eip6iRSNhlMNEBGpINd6nTdhfSJUiXkMSsbitQFpC0q1TC53iVdTN4KgqOC7QcPa9xkA9F5ndWOtxIk94gjo4HOF7FfPhwcRPguM4/wFlZ7n0yab3ZOkloJ8YXFptRk7Nro5JvCXASTpHMk4A8VGialWoBSDyyWjBIBaCO8Vr0Oyhn/EqFw8yfeV0VrSp0RDG/rPmt3qRJcrwkPpFLutGfRW7Np5qrSYXOk5Wva0lz/Uxl21C3+HviFj0GLStl0wVGbOstKkhc32iI1xmfotXhtZVO0LQGzAn6rHrob9JoSOZqPUHugILqmVIkL5z4YBW1JBQalSFLSnfbTz6LR6doQNj5U3PQS0jCYEjdYbMgWqcKTgq7SSi5lZqErGEDJQyIRHENyk4YnclaOHmCwJqpILqeUkNL1FZYIUNOVOUg3K1+GgJhik6mIUmlPUEqZRGisxqnBRmsTuW2mriOiDBkLueFEaBHRcOus4XX/wAPyC9Dw7EmFFi4r95WaNTG65+4uocr1vcggZXsWSX7yrhczfVt1sXtTulcze1FGo8FRM29fMrIrNWjcPVCod1wyVs1KYYnaxGDVKnTyhIAtvT2WlbqpSCuNW0UJl+krtErPpOVym5dETNmtZPhS43UmnOCqdu+Oqlf1QWQo6j/AJsmJyF5J238FUbVLd1svoAGVm8Stp2Xzz4G0PTrEtmcaoWjWrFujG9Nk+ZErLtqRDHeDm/UFal25pd4BjR8wAIVQlboQMVcynNVrjyVc52UrejpdJSn7AmXQwEQE+kAb5VetcBuyrgk5JWW9DD1GmVEuIVb9pIMK0x0jKryNCIfMpJGPFMuZ6LDAcIuwUWsSJW6nVWAslWaLsKGsAKdo4FVJqXA0PqhQcErggbFQoOndEHSoqwgaFu8OuO4R4LBpsl2lWrZ+gkSunptfbMRC+uM/NXuGXQMBYXFHwSn4JdAOjK9eOpbG0dRf1e6uauitm7q91YNdyvUYolGuFnVitKqJWZcrnaNESpmVZY1U7Uq4EJDCtdCPSM8/LkqgIVmk759FohGhRVymFRoknoPDmrtGVtEzkW2EgKve3LYicolV0NJ/wCFzV9e6ieoxMrLqZeWiTRfU1bINOmZzkSsyhfkFaVO9ELxpRTRUfUu0mNAeDsWiPMGQs+sYwM9fEo9S7aWhvMu9AMlALtJ8dx/SOqyUUpBJkRIyUz6klDqvkJ6LZIU6l37EoLUpDfmhBysV6WJVMv5LCK8rYSQZlvOSropiFRo3XLCsioCPFXSSwCEWhJOHDwSVWFC1wJUKlYYSYRCA7dc+rNXgC3U1RlTougY3UK9buhCbVAz1STrnuPuEqSo0n4xvKes+cJW78Qqer6jLlB8EFWalKXE+ErLrOIb5q9Y3jQ06t4hX8S2NFW8YXNWbw+W1JO3itRzpBI6qtTgnI/5XZ03VO1Y2a9arLRHRYtdxytKqe7jZY9xUg+a9mTsQCtWMLPr1lZuKiybiuJSGWrasAZKNUrnfksV1bMooudQaPNIdmvTrKzaVySsS1umgwclbtrT1CWgj7q0rCzWtneCu0qwOOaoWbHDxWpTph24z9VtFMiQHiTopOjoVwRqODs+K9DuLXu52En9FxN1aFznO5SfRcHWS86j7GUhqTp91esu8YiVmU6RLo67LWZTbTBcThonHMrzpZlguLYFz9D3OOS3utb47lx+iPbGBqqHc/M+HgiUrgBsPaDUMnbInqqF02DJMDkOZ8UpOUmsZCTNJmnM+fkoOe0AQcys6xql3xDvAHuP0RwAASd1jO1aoEy5Vr6gBKE6nA8VkVK5aQ6YzK2adcVWiMGFK0tqBso7ZlEo1c7zKz3UXuc4bQforVpT0gTvK1kopUyUXu9y2TokDqko+X9y9xC1qTjzlMdhB5olnTjXPIhQozgDYLjVKeRELmoTjxCn8PY+KG2C+OhRKNQd6T18lcoOqXYaWSdWrynKVKpkdYVR51OHipV2aCfpCiULGXbqoJaB5HyQy0/h5gk+ioMdJHzKvi4BIeOYbPmBmP75I2uKBMK64GgMG+5Q2v8Aw+f1QLkgODm7YlCNbvzOBt6qoWsop+ht1aw0+XNYV446h8/ZWrK71652d6QMLMrV4fpP8OqD1EYHmvo9OW6CZN4A3AOZWDcEzM4WxfV+6T/eViV3d3++p/Rat0JyIOq5R6VUCfT5o3CbIPDnHYYVapQ72kbDPrt9EnNWV2svcOpaqgnAC7GhUwA0LmbHh7w0P5FdVYNGB4LXRdgy9b0J3JlXabD1Q6eEZq6UiWw5dLSD0XMm2A1uJ7smB1W7cVDpPkVzdSsH6iSQQ4Y/hP6LzPEpxioiSsA8taCThx2jdoKqua46BMgvn5NE+8LQrgAFxCq2bNT9XIQ0DqfxH6leZur+SkWmUQIqOEuP4QeZ6nwVK5br2yT+I8gFo13QCXRrgjGzR0Q/gkt0gYcAfGBuk5JO+5LMmk8MpvLZJ1NE8jAcYHsjU3yAT1V1trFIMjYk+uVWtrUxtuQfqsnrRd/qOgVW3+ISDgDIPUI3D2loHLJgrU/ZQ0Z5x8h0Q208uBwIwpfUY2irIGmzJd9ke7tsNcNseviiubpZjvIFa4loHp5qHKisEXROySZ9tVnExhJdimqM9svQZtcZaN9WflIQW3GkEnOYx7hSpUi0uJicDO8otO3BiRGx84OQfovPaV5KQEUSx2rqDJ8Dt7phTmY8o8wVouYDJmIAMeew9VTNANOrq4GPIOWjknlDeEU6UsIBEuAgfPkrT2ksMZcBEeynVpDW2MEF3qRMqFCW69W5mPIHco5quwIqtpODXFo5c85Jy1WW1AWaQIIMCfX7lL4jpERGx8IgCOQlVi1wDzPNpnyOfmm0mIau/B8sqlWrEGBsWFo8+ZVy+gSAZg/ItBWNUcXPG0jOdhiZW2lGyXLJp8Nrd4CQJB+ULM428hwI5ubn7qDKsujMaXT74QKxJiTkE/LYBd2lccA5YGrVtTXAcon1VN75wBsQPdPenTIGJl3y5fdQGGtIzOn6CF1KW6hWW7C50Uqg5h30T2jjOd3HPgOX0Cz3OBBzucxsR/YU/wBqj6ev9+6iSyWpHVjioFIMaZOuPLK3+H5jyXmVlenIH88/Vel8KyAfALo6ZNNjTs2qQKM4odEQpucu4TKtzVgH9VztVx1OgDMx4RzR+O3el2nnHyWfTvRDXEZaXAnlnn7Lw/E5bpbfQSL9T8Odmu+gG6nRcA3ujvETPSSqgqB1JoJBJcSR/SADKJw94dPeH8IHU4K8xyltoss27JOTiZM9eaOXYcQQDMNHhM/oqt28CN4Lhkfyjn6+ye4cAWahjvOxOJiPYrG26FeCTu7A378eYgj7I7RBBnlMdFX1GWz/ANweGA10fJRa5xIJ8YHQBTVCLFese67+of6eSTJdO2+esIVR06W/XpCekYnqZUpWAWpBEA7A/YfZVbf8UOHOZ5BFPddG7Q3J5DBP3RbamAC7JGCBuI/+rRYjYw7aj/5gP05JKoKurJa4yTz8Ukrl6lbvcrXR77/yt91Yofhb+Z3+4JJLTV+p/sQgzfu/6AQh3OzfzFJJRH+f7CXABn76n5+vcKCD3h8/dJJUvoQdgFf8Z/M77qLj32jlH6pJK4cIT4K1x+H191l8R/FU8npJLs0uTNkKf4x+UewUyP8AFHmfdJJdC5KMm+/ef5fspu/dH87vRMktlyjMp2x7rvyD7prnf/KnSWj5KRUoHI8wvW+AnuDyakkujT5NIm7T5eblGscjzPskkuobOE46T+01Pyqg0+/6JJLx+q+tkdjoLcew/wDGE9qIaPJ3uUkl5H5jUPU/6n5WfdEp5dnOGezkkll+P/exIC/J1jzZ/sciOO/5n+ySSU+wmTGw8j9kW1/A7yH/ALJJKVyMJafZvslTPdq/nKZJa+gwE7+Z90ySSS4Ef//Z';
  members: Member[] = [
    {name: 'bob', image: this.pupImage, email: 'asdf@asfd.com', presence: 'away'},
    {name: 'bill', image: this.pupImage, email: 'asdf@asfd.com', presence: 'active'},
    {name: 'george', image: this.pupImage, email: 'asdf@asfd.com', presence: 'away'},
    {name: 'dave', image: this.pupImage, email: 'asdf@asfd.com', presence: 'active'},
    {name: 'dog', image: this.pupImage, email: 'asdf@asfd.com', presence: 'active'}
  ]
  selectedMember: Member;

  constructor() { }

  getMembers(): void{
    // access member service
    //this.memberService.getMembers().then(members => this.members = members);
  }

  ngOnInit() {
  }

  onSelect(member: Member): void{
    this.selectedMember = member;
  }

  removeSelected(): void{
    this.selectedMember = null;
  }

}
