import DataList from "./DataList"
export const template={
    title:"Form of Form",
    fields:[
        {
            title:"Start Date-Time",
            type:"date",
            name:"start_date"
         },
         {
            title:"End Date-Time",
            type:"date",
            name:"end_date"
         },
         {
            title:"End Date-Time",
            id:"pdata",
            type:DataList,
            name:"products"
         },
         
         

]
}

 