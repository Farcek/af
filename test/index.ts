import "reflect-metadata";
import { ListPage, FormPage, CustomPage, View, ActionParam, Action } from "af.common";


class GoListComponent {

}

@CustomPage()
class Home {
    init: string

    @View(GoListComponent)
    goList: string
}



@ActionParam({
    method: 'post',
    path: '/delete:/:id'
})
class DeleteParam {
    id: number
}

//#region Create
@ActionParam({
    method: 'post',
    path: '/create',

})
class CreateParam {
    
}

@CustomPage({ param: CreateParam })
class Create {
    @View()
    form: CreateForm
}
class CreateForm {
    name: string
    type: string
}
//#endregion

//#region Edit

//#endregion