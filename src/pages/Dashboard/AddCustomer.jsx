import { useForm } from "react-hook-form";
import Swal from "sweetalert";

const AddCustomer = () => {
  const { register, handleSubmit } = useForm();

  const imageHostKey = "de29cf88aa178b3a6967e0556b301592";

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const customer = {
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            address: data.address,
            phoneNumber: data.phone,
            description: data.description,
            birthdate: data.birth,
          };

          //save customer information to the database
          fetch("https://repliq-assignment-backend.vercel.app/customers", {
            headers: {
              "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(customer),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              Swal("Customer Added Successfully", "", "success");
            });
        }
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl font-bold mb-6 text-center">Add Customer</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              {...register("phone", { required: "Phone Number" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Birth Date</span>
            </label>
            <input
              type="date"
              {...register("birth", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-center">
            <input
              className="btn px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 my-2 flex "
              type="submit"
              value="Add Customer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
