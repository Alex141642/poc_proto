import { Request, RequestType } from './testt'
// npx protoc --proto_path='../proto/' --ts_proto_out=./src --ts_proto_opt=oneof=unions --ts_proto_opt=esModuleInterop=true ../proto/*
const a = () => {
    var json = JSON.parse("{\"Type\":\"READ\",\"First\":\"ee\"}")
    var a = Request.fromJSON(json)
    console.log(Request.toJSON(a))
    var a = Request.create({
        Type: RequestType.WRITE,
        Params: {
            Second: "secondary",
            $case: "Second"
        }
        //First: "test"
    })
    console.log(Request.toJSON(a))

}
a()
