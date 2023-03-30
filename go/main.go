package main

// protoc --proto_path="../proto/" --go_out='./proto' '..\proto\testt.proto'
import (
	"fmt"
	"titi/proto/proto"

	"google.golang.org/protobuf/encoding/protojson"
)

func main() {
	request := proto.Request{
		Type:   proto.RequestType_WRITE,
		Params: &proto.Request_First{First: "tt"},
	}
	requestJSON, err := protojson.Marshal(&request)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return
	}
	fmt.Printf("%v\n", string(requestJSON))
}
