import { defineField } from "sanity"

export default defineField({
    name:'save',
    title:'Save',
    type:'document',
    fields:[
        {
            name:'postedBy',
            title:'PostedBy',
            type:'postedBy'
        },
        {
            name:'userId',
            title:'UserId',
            type:'string'
        }

    ]
})