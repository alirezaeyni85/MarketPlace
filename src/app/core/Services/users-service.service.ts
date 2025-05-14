import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class UsersActive{
     acitveUsers:any  = [
        {id:1,
             title:'Papaya', 
             info:'Purchase by you for 0.05 ETH', lastSeen:'12 mins ago'
             },
        {id:2, title:'Papaya', info:'Purchase by you for 0.05 ETH', lastSeen:'12 mins ago' },
        {id:3, title:'Papaya', info:'Purchase by you for 0.05 ETH', lastSeen:'12 mins ago' },
        {id:4, title:'Papaya', info:'Purchase by you for 0.05 ETH', lastSeen:'12 mins ago' },
        {id:5, title:'Papaya', info:'Purchase by you for 0.05 ETH', lastSeen:'12 mins ago' },

   
    ]

     usersCreators:any  =[
        // { id:2,  title:'Papaya', countItems:'60 Items', },

        {id:'1', title:'Papaya', countItems:'60 Items'  },
        {id:2, title:'Papaya', countItems:'60 Items',  },
        {id:3, title:'Papaya', countItems:'60 Items',  },
        {id:4, title:'Papaya', countItems:'60 Items',  },
        {id:5, title:'Papaya', countItems:'60 Items',  },
        {id:6, title:'Papaya', countItems:'60 Items',  },
        {id:7, title:'Papaya', countItems:'60 Items',  },
        {id:8, title:'Papaya', countItems:'60 Items',  },
    ]

     followedUsers:any =[
        {id:1, title:'Papaya', countItems:'60 Items'  },
        {id:2, title:'Papaya', countItems:'60 Items',  },
        {id:3, title:'Papaya', countItems:'60 Items',  },
        {id:4, title:'Papaya', countItems:'60 Items',  },
     ]

}