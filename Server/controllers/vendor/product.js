import addProduct from "../../modale/addProduct.js";
export const addVendoProduct = async (req, res) => {
  console.log("req===>", req.body);
  const { productName, discription, price, image, id } = req.body;

  try {
    const newUser = await addProduct.create({
      product_name: productName,
      price: price,
      discriptrion: discription,
      image: image,
      user_id: id,
    });

    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const productList = async (req, res) => {
  const { id } = req.query;
  console.log("Pid===>", id);
  try {
    const newUser2 = await addProduct.find({
      user_id: id,
    });
    // if(newUser2.length == 0){
    //   return res.status(200).json("Add Product");
    // }
    return res.status(200).json({ result: newUser2 });

  } catch (error) {
    console.log("error----->", error.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const superAdminProductList = async (req, res) => {
  try {
    const newUser2 = await addProduct.find({});
    return res.status(200).json({ result: newUser2 });
  } catch (error) {
    console.log("error----->", error.message);
    return res.status(500).json("someting went wrong......");
  }
};