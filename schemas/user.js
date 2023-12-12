import { defineField } from "sanity"

export default defineField({
    name:'user',
    title:'User',
    type:'document',
    fields:[{
        name:'username',
        title:'UserName',
        type:'string'
    },
    {
        name:'image',
        title:'Image',
        type:'string'
    },
]
})