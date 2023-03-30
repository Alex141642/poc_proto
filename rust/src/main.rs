mod testt;
fn main() -> Result<(), Box<dyn std::error::Error>> {
    /*let toto = test::Request {
        r#type: test::RequestType::Write.into(),
        params: Some(test::request::Params::First("toto".to_string())),
    };
    let a = serde_json::to_string(&toto)?;
    println!("{a}");
    */
    let mut toto = testt::Request {
        Type: testt::RequestType::WRITE.into(),
        Params: Some(testt::request::Params::First("toto".to_owned())),
        ..Default::default()
    };
    println!("{}", protobuf_json_mapping::print_to_string(&toto)?);
    Ok(())
}
