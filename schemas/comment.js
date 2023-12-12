import { defineField } from "sanity"

export default defineField({
    name:'comment',
    title:'Comment',
    type:'document',
    fields:[
        {
            name:'postedBy',
            title:'PostedBy',
            type:'postedBy'
        },
        {
            name:'comment',
            title:'Comment',
            type:'string'
        }

    ]
})