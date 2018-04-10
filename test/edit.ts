import { ActionParam, CustomPage, View, IAction } from "af.common";



@ActionParam({ method: 'get', path: '/edit/:id' })
export class EditParam implements IAction<GetEdit> {
    // @Query('id')   
    id: number
}

@CustomPage({ param: EditParam })
class GetEdit {

    @View()
    form: EditForm
}

class EditForm {
    name: string
    desc: string
}

@ActionParam({    method: 'post',    path: '/edit/:id'})
export class DoEditParam implements IAction<void> {
    // @Query('id')   
    id: number

    name: string
    desc: string
}



