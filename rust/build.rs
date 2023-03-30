use std::process::{Command, CommandArgs, CommandEnvs};
fn main() -> Result<(), Box<dyn std::error::Error>> {
    /*
    let mut prost_config = prost_build::Config::new();
    prost_config.type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]");
    prost_config.type_attribute(".", "#[serde(rename_all = \"PascalCase\")]");
    prost_config.out_dir("./src/");
    prost_config.compile_protos(&["../proto/testt.proto"], &["../proto"])?;
    */
    protobuf_codegen::Codegen::new()
        .out_dir("./src")
        .includes(&["../proto"])
        .input("../proto/testt.proto")
        .run()?;

    Ok(())
}
