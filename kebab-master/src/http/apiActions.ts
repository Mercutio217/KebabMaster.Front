import MenuItemModel from "../models/dtos/MenuItemModel";
import { Order } from "../models/dtos/Order";
import Endpoints from "./endpoints";
import HttpMethods from "./httpMethods";
import OrderRequest from "./models/OrderRequest";
import OrderUserRequest from "./models/OrderUserRequest";
import TokenResponse from "./models/TokenResponse";

const jsonHeaders: any = {
  'accept': '*/*',
  'content-type': 'application/json'
};


const apiLogin = async (email: string, password: string, successHandler: Function, unauthorizedHandler: Function, errorHandler: Function) => {
  const response = await fetch(Endpoints.loginEndpoint, {
    method: HttpMethods.POST,
    body: JSON.stringify({ email, password }),
    headers: jsonHeaders
  });

  if (!response.status.toString().startsWith('20')) {
    if (response.status == 401 || response.status == 403) {
      unauthorizedHandler("Invalid password");
      return;
    }
    errorHandler("Error");
    return;
  }
  const result = await response.json() as TokenResponse;
  successHandler(result);

};

const apiGetMenu = async (successHandler: Function, errorHandler: Function) => {
  const response = await fetch(`${Endpoints.menuEndpoint}`, {
    method: HttpMethods.GET,
  });

  if (!response.status.toString().startsWith('20')) {

    errorHandler("Error");
    return;
  }
  const result = await response.json() as MenuItemModel[];
  successHandler(result);

}

const apiGetOrders = async (id: string, token: string, successHandler: Function, unauthorizedHandler: Function, errorHandler: Function) => {
  const requestHeaders: any = { authorization: `Bearer ${token}` };
  requestHeaders.authorization = `Bearer ${token}`;
  const response = await fetch(`${Endpoints.usersEndpoint}/${id}/orders`, {
    method: HttpMethods.GET,
    headers: requestHeaders
  });

  if (!response.status.toString().startsWith('20')) {
    if (response.status == 401 || response.status == 403) {
      unauthorizedHandler("Invalid password");
      return;
    }
    errorHandler("Error");
    return;
  }
  const result = await response.json() as Order[];
  successHandler(result);

}

const apiUpdateUserData = async (id: string, token: string, successHandler: Function, unauthorizedHandler: Function, errorHandler: Function) => {
  const requestHeaders: any = { authorization: `Bearer ${token}` };
  requestHeaders.authorization = `Bearer ${token}`;
  const response = await fetch(`${Endpoints.usersEndpoint}/${id}`, {
    method: HttpMethods.PUT,
    headers: requestHeaders
  });

  if (!response.status.toString().startsWith('20')) {
    if (response.status == 401 || response.status == 403) {
      unauthorizedHandler("Authorization issue");
      return;
    }
    errorHandler("Error");
    return;
  }
  successHandler();

}


const apiSubmitOrder = async (request: OrderRequest | OrderUserRequest | any, token: string, successHandler: Function, errorHandler: Function) => {
  let parsed = request as any;
  const headers = {...jsonHeaders};
  let endpoint = Endpoints.ordersEndpoint;
  if(instanceOfOrderUserRequest(request)) {
    endpoint = `${Endpoints.usersEndpoint}/${parsed.id}/orders`;
    headers.authorization = `Bearer ${token}`;

  }

  const response = await fetch(endpoint, {
    method: HttpMethods.POST,
    body: JSON.stringify(request),
    headers: headers
  });

  if (!response.status.toString().startsWith('20')) {
    errorHandler();
  } else {
    successHandler();
  }
}

const apiSubmitUserOrder = async (request: OrderUserRequest, successHandler: Function, errorHandler: Function) => {
  const response = await fetch(`${Endpoints.usersEndpoint}/${request.id}/orders`, {
    method: HttpMethods.POST,
    body: JSON.stringify(request),
    headers: jsonHeaders
  });

  if (!response.status.toString().startsWith('20')) {
    errorHandler();
  } else {
    successHandler();
  }
}
function instanceOfOrderUserRequest(object: any): object is OrderUserRequest {
  return 'id' in object;
}


export { apiLogin, apiGetOrders, apiSubmitOrder, apiGetMenu, apiSubmitUserOrder };