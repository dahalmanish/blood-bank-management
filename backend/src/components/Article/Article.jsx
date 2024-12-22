import React from "react";

const Article = () => {
    return(
        <div className="container flex mt-20">
            <img src="./images/whyhlb_image.png" alt="" />
            <div className="container bg-red-500 p-16 text-2xl leading-10">
                <h2 className=" font-bold uppercase">Why Donate Blood</h2>
                <p className=" text-left">Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.</p>
            </div>
        </div>
    )
}

export default Article;