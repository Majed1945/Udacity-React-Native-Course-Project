import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";
import { useEffect } from "react";
import { PENDING } from "../../utilities/helpers";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";

//SECTION - Toast
export const useShowToast = (type = "success", text1 = "", text2 = "") => {
  Toast.show({ type, text1, text2 });
};

//SECTION - Form
export const useUpdateFormFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (status === PENDING && customerID) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      dispatch(actions.setFormField({ field, value }));
    },
  };
};

//SECTION - Create
export const useNewCustomer = () => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

//SECTION - Edit
export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

//SECTION - List
export const useListCustomers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);
  return useSelector((state) => state.customer.list.customers);
};

//SECTION - Delete
export const useDeleteCustomer = (customerID) => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.deleteCustomer(customerID));
    },
  };
};

//SECTION - Clear storage
export const useClearCustomers = () => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      dispatch(actions.clearCustomers());
    },
  };
};

//SECTION - Font
export const useCustomFonts = () => {
  const [loaded, error] = useFonts({
    "PTSerif-Bold": require("../../../assets/fonts/PTSerif-Bold.ttf"),
    "PTSerif-BoldItalic": require("../../../assets/fonts/PTSerif-BoldItalic.ttf"),
    "PTSerif-Italic": require("../../../assets/fonts/PTSerif-Italic.ttf"),
    "PTSerif-Regular": require("../../../assets/fonts/PTSerif-Regular.ttf"),
    "Roboto-Black": require("../../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../../../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../../../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("../../../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../../../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../../../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../../../assets/fonts/Roboto-ThinItalic.ttf"),
  });

  return [loaded, error];
};
