import React, { Component } from 'react'
import Newitem from './Newitem';



export default class Mainnews extends Component {

    artical = [
        {
          "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          },
          "author": "Dean Bilton",
          "title": "Sam Konstas's Boxing Day Test debut enthralled Australia, and now nothing will be the same",
          "description": "In a little over 90 minutes and with only 65 balls faced, Sam Konstas's debut innings in the Boxing Day Test has forced Australian cricket into a new generation, and there is no going back now.",
          "url": "https://www.abc.net.au/news/2024-12-26/australia-india-boxing-day-test-sam-konstas-virat-kohli/104763676",
          "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d8ccadbff08c1f862082f549cf6d3a4e?impolicy=wcms_watermark_news&cropH=450&cropW=800&xPos=0&yPos=69&width=862&height=485&imformat=generic",
          "publishedAt": "2024-12-26T07:14:35Z",
          "content": "Sam Konstas stands in the centre of the MCG on a pitch sullied only by his spike marks.\r\nHe is surrounded by humanity, tens of thousands who have come on Boxing Day to see an engrossing Test series c… [+7241 chars]"
        },
        {
          "source": {
            "id": "news-com-au",
            "name": "News.com.au"
          },
          "author": "James McKern",
          "title": "‘Absolutely pathetic’: Indian star savaged",
          "description": "Indian cricket veteran Virat Kohli has come under heavy fire over an ugly act in the middle of the MCG on Boxing Day.",
          "url": "https://www.news.com.au/sport/cricket/absolutely-pathetic-virat-kohli-slammed-over-sam-konstas-bump/news-story/a8979b1623ba91a927d5a8b1637a85fa",
          "urlToImage": "https://content.api.news/v3/images/bin/8f4685afcf9e91b88010d87b9112d83d",
          "publishedAt": "2024-12-26T00:55:00Z",
          "content": "Indian cricket veteran Virat Kohli has come under heavy fire over an ugly act in the middle of the MCG on Boxing Day.\r\nThe opening session of the fourth Test was taken over by teen sensation Sam Kons… [+2847 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor()
    {
        super();
        this.state={ artical : this.artical }
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>Today's News</h1>
        <div className="row">
        {this.state.artical.map((element)=>{
         return <div className="col sm-4"><Newitem title={element.title} url={element.url} description={element.description} urlToImage={element.urlToImage}/></div>
        })}
           
        </div>
        
      </div>
    )
  }
}
