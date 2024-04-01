import { endpoints } from "../endpoints"
import { getHttp } from "../http/http.service"

export const productsList = async ({ params }: any) => {
    return await getHttp<any>({
      url: endpoints.PRODUCTS.LIST(),
      params,
    })
  }
  