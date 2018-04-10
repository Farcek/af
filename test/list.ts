import { ActionParam, CustomPage, Action, View } from "af.common";
import { EditParam } from "./edit";

@ActionParam({
    method: 'get',
    path: '/list'
})
class ListParam {
    //@q('str')
    search : string

    limit:number
    page: number
}

@CustomPage({  })
class List {
    
    @View()
    items : ListItem[]

    search : string
    page : number
    limit : number
}

class ListItem{
    id: number
    name: string

    @Action({  })
    edit: EditParam

    @Action({  })
    delete: EditParam
}