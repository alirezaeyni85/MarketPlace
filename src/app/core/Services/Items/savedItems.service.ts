import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class SavedItemsService{
public savedItems:any = [
    {
        id:1,
        title:"Liquid Wave",
        activeTime:["Auction time",'Current Bid'],
        tiemEnd:'0.05 ETH',
        finishTime:['3h 1m 50s','0.15 ETH']
    },
];

public isClicked:boolean =false;
}