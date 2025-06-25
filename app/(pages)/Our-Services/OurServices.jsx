import React from 'react'
import Card from '@/app/(components)/Card'

function OurServices() {

  const cardDataRow1 = [
                {           
                  illustration:'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750842455/ProcessImprovement_a7zvbs.svg',
                  title:"Process Improvement" ,
                  paragraph:"We optimize your existing production processes to reduce waste, increase yield, and improve consistency — without changing your infrastructure." 
                },{
                  illustration:"https://res.cloudinary.com/dipc3ow9z/image/upload/v1750842455/Re-EngineeredRecipes_xjw138.svg",
                  title:"Re-Engineered Recipes",
                  paragraph:"We reformulate underperforming recipes to enhance texture, stability, and cost-efficiency using smarter, cleaner ingredients"
                },
  ]

  const cardDataRow2 = [
          {       illustration:"https://res.cloudinary.com/dipc3ow9z/image/upload/v1750842455/researchDevelopment_citfmx.svg",
                  title:"Research & Development",
                  paragraph:"From idea to execution, we work with your team to co-develop new products using application-specific trials, lab insights, and market-driven innovation"
                },
                {
                  illustration:"https://res.cloudinary.com/dipc3ow9z/image/upload/v1750844941/SolvingYourProductProblem_gxjufd.svg",
                  title:"Solving Your Product Problems",
                  paragraph:"Whether it’s separation, low yield, texture issues, or ingredient cost — we diagnose the issue and custom-build ingredient systems to fix it"
                },
                {
                  illustration:"https://res.cloudinary.com/dipc3ow9z/image/upload/v1750844941/TechnicalAssistance_qnjsbn.svg",
                  title:"Technical Assistance",
                  paragraph:"Our experts provide hands-on support during trials, scale-up, and troubleshooting — ensuring smooth integration into your process and product line"
        }
  ]

  return (
    <div className='w-full h-[1900px] md:h-[950px] '>
        <div className=' md:h-[170px] md:w-[598px]  text-center mx-auto mt-20'>
                <h2 className="text-[36px] mb-[40px] text-text_blue">Helping You Build Better Products,<br/> Every Step of the Way</h2>
                <p className="text-medium_blue text-[20px]">Book a Free Consultation with Our Technologists</p>
        </div>
        <div className="h-fit md:h-[650px] w-[full] mt-16 flex align-middle justify-center items-center flex-col gap-[30px] md:gap-[49px]">
            <div className="  md:h-[279px] w-[100dvw] flex md:flex-row flex-col align-middle justify-center gap-[30px] md:gap-[54px] items-center">
                {cardDataRow1.map((card) => {
            return <Card 
            key={card.title}
            illustrations={card.illustration} 
            title={card.title} 
            paragraph={card.paragraph}
          />
})}
            </div>
            <div className=" md:h-[279px] w-[100dvw] flex md:flex-row flex-col align-middle justify-center gap-[30px] md:gap-[54px] items-center">
                {cardDataRow2.map((card) => {
            return <Card 
            key={card.title}
            illustrations={card.illustration} 
            title={card.title} 
            paragraph={card.paragraph}
          />
})}
            </div>
        </div>
    </div>
  )
}

export default OurServices