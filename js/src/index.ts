import { Request, RequestType } from './testt'

const a = () => {
    var a = Request.create({
        Type: RequestType.WRITE,
        Params: { First: "e", $case: "First" },
        //First: "test"
    })
    console.log(JSON.stringify(Request.toJSON(a)))
}
a()
