import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import CreateBy from "./modal/CreateBy";
import DemoImage from "./modal/DemoImage";
const initialValues = {
  name: "",
  city: "",
  image: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("આપનું નામ is required "),
  city: Yup.string().required("ગામ / શહેર નું નામ is required"),
  image: Yup.mixed().required("આપનો ફોટો અપલોડ કરો is required"),
});
const Home = () => {
    const[forModal,setForModal] =useState(false);
    const [forDemoModal,setForDemoModal] = useState(false);
  const [data, setData] = useState(initialValues);
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const cardRef = useRef(null);
  useEffect(() => {
    // Calculate the width and height of the content
    if (cardRef.current) {
      setContentWidth(cardRef.current.offsetWidth);
      setContentHeight(cardRef.current.offsetHeight);
    }
  }, [data]); // Trigger recalculation when data changes
  const onSubmit = (values) => {
    setData(values);
    setForDemoModal(true);
    
  };
  const handleImageGenerate = () => {
    html2canvas(cardRef.current, {
      width:216,
      height: 300,
    }).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  
  
  
  return (
    <div className="sm:max-w-[350px] md:max-w-[430px] mx-auto mt-4 mb-2  px-5">
      <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <h2 className="text-[30px] font-bold">સેવા સેતુ</h2>
        <p className="tetx-[15px] font-medium">
          દોસ્તો અહી રજુ કરેલ આરોગ્ય લક્ષી તમામ પ્રકારના પ્રખ્યાત અને નિષ્ણાંત
          ડોક્ટરો સેવા સેતુ માં સેવા આપવા આવી રહ્યા છે જેમનો અલગ અલગ સમય પર
          આવનાર છે તો તમારા પરિવાર સંબંધી કે ગામના ગ્રુપ માં આ કામની માહિતી જરૂર
          શેર કરો જેથી કોઈક મિત્રોને કામ આવી શકે છે..
        </p>
      </div>
      <div className="relative z-0 mb-3" ref={cardRef} >
        <img
          src="/src/assets/pngs/main.png"
          alt="img"
          className="mx-auto w-[250px] h-[300px] object-contain mb-3"
        />
          {/* <div className="absolute z-30 top-[5%] left-[5%] flex items-center gap-[50px]">
            <p className="text-white text-[20px]">
              {data.name} {data.city}
            </p>
            {data.image && (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Selected Image"
                className="w-[150px] h-[150px] rounded-[100%] object-fill"
              />
            )}
          </div> */}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="sm:w-[370px] md:w-[390px] flex flex-col items-center justify-center gap-2 mb-6 ">
            <div className="flex flex-col items-start gap-0.5 w-full">
              <label htmlFor="name" className="font-bold">
                આપનુ નામ <span className="text-red-950">*</span>
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="આપનુ નામ"
                className=" border  rounded-lg border-gray-400 outline-none w-full py-[0.375rem] px-[0.75rem]"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500">{errors.name}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-0.5 w-full">
              <label htmlFor="city" className="font-bold">
                ગામ / શહેર નું નામ <span className="text-red-950">*</span>
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                placeholder="ગામ / શહેર નું નામ"
                className=" border  rounded-lg border-gray-400 outline-none w-full py-[0.375rem] px-[0.75rem]"
              />
              {errors.city && touched.city ? (
                <div className="text-red-500">{errors.city}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-0.5 w-full">
              <label htmlFor="image" className="font-bold">
                આપનો ફોટો અપલોડ કરો <span className="text-red-950">*</span>
              </label>
              <input
                id="image"
                name="image"
                type="file"
                
                className=" border  rounded-lg border-gray-400 outline-none w-full py-[0.375rem] px-[0.75rem]"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              {errors.image && touched.image ? (
                <div className="text-red-500">{errors.image}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-[#198754] font-medium hover:bg-green-800 w-full text-[1rem]  px-[0.75rem] py-[0.375rem]  text-white cursor-pointer rounded-lg mt-2"
            >
              <img
                src="/src/assets/svgs/setting.svg"
                alt=""
                className="w-6 inline mr-1"
              />
              Generate Image
            </button>
          </Form>
        )}
      </Formik>

      <div className="text-center pt-3 border-t-2 border-gray-300">
        <p className="text-[1rem] font-medium ">
          Created by{" "}
          <span  onClick={() => setForModal(true)} className="!text-red-900 border-b-2 text-[14px] border-b-red-800 font-bold cursor-pointer">
            Ekcero Infotech
          </span>
        </p>
      </div>
      <CreateBy forModal={forModal} setForModal={setForModal}/>
      <DemoImage forDemoModal={forDemoModal} setForDemoModal={setForDemoModal} cardRef={cardRef} data={data} handleImageGenerate={handleImageGenerate}/>
      
    </div>
  );
};
export default Home;
