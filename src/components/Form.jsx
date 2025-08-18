import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Form = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    handleReset,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      internship: "",
      cnic: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      internship: Yup.string().required("Internship is required"),
      cnic: Yup.string().required("CNIC is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      toast.success("Form submitted successfully!");
    },
  });

  return (
    <section className="mx-auto mt-15 mb-5 max-w-2xl px-4">
      <div className="mx-2 min-h-[600px] w-full max-w-md rounded-md border-3 border-green-400 bg-white p-4 shadow-[0_0_15px_rgba(34,197,94,0.8)] sm:mx-auto sm:max-w-lg sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <h1 className="mb-3 text-center text-3xl font-semibold text-green-600">
            Welcome To Internee.pk
          </h1>
          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="name" className="text-black">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div className="text-red-500 mb-2">
            {errors.name && touched.name ? errors.name : null}
          </div>

          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]" onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="text-red-500 mb-2">
            {errors.email && touched.email ? errors.email : null}
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="internship" className="text-black">
              Internship
            </label>
            <input
              id="internship"
              name="internship"
              placeholder="Enter your internship"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]" onChange={handleChange} onBlur={handleBlur} value={values.internship}
            />
          </div>
          <div className="text-red-500 mb-2">
            {errors.internship && touched.internship ? errors.internship : null}
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="cnic" className="text-black">
              CNIC
            </label>
            <input
              id="cnic"
              name="cnic"
              placeholder="Enter your CNIC"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]" onChange={handleChange} onBlur={handleBlur} value={values.cnic}
            />
          </div>
          <div className="text-red-500 mb-2">
            {errors.cnic && touched.cnic ? errors.cnic : null}
          </div>
          <div className="flex justify-center mt-5">
            <button className="rounded-2xl bg-green-600 px-4 py-2 text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
