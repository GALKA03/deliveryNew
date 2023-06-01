// import BasketQuantityContainer from "./BasketQuantityContainer"
// import BasketSection from "./BasketSection"
import Product from "./Produkt"
const BasketPage = () => {
    return (
       <section className="container mx-auto">
            <h1 className="text-4xl mt-4 text-center">Pizzas delivery</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
               <Product/>
            </div>
                 {/* <BasketQuantityContainer />   */}
        
        </section>
      
   
      
    )
}
export default BasketPage