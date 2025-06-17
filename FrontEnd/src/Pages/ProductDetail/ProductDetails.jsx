import { useParams } from "react-router"


export const ProductDetails = () => {
    const {id}=useParams()
    console.log(id);
  return (
    <div className="my-16 text-center space-y-2">
        <h1 className="text-4xl font-bold ">ProductDetails {id}</h1>
           <p className="text-lg text-red-500 font-medium">
          ⚠️ Product detail feature will be implemented after backend integration.
        </p>
    </div>
  )
}
