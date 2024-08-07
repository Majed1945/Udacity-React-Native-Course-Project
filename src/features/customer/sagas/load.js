import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utilities/asyncStorage";

export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    let customers;
    const customersSting = yield get("Customers");
    if (customersSting) {
      customers = JSON.parse(customersSting);
    } else {
      customers = [];
    }

    yield delay(1000);
    yield put(actions.loadResult(customers));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}
