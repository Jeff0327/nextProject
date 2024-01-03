import Image from "next/image";
import back from "/public/back.jpg";
function list() {
  let products = ["1", "2", "3"];
  return (
    <div>
      {products.map((e, i) => {
        return (
          <div key={i}>
            <Image src={back} className="backgroundImg" alt="background" />
            <h4>{e}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default list;
