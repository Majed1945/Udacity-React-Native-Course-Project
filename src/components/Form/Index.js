import { View, KeyboardAvoidingView, Platform, Text } from "react-native";
import React, { useMemo } from "react";
import formStyles from "./styles";
import CustomizedTextInput from "../TextInput/Index";
import CustomizedRadioGroup from "../RadioButtonGroup/Index";
import CustomizedSelector from "../Selector/Index";
import CustomButton from "../Button/Index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { INPROGRESS, IsEmpty, REQUESTING } from "../../utilities/helpers";
import { useUpdateFormFields } from "../../features/customer/hooks";
import theme from "../../../theme";

const CustomerForm = ({ stateStatus, handleSubmit, customerID, disabled }) => {
  const styles = formStyles();
  const { fields, setFormField } = useUpdateFormFields(customerID);
  const { firstName, lastName, status, region } = fields;
  const route = useRoute();
  const radioButtons = useMemo(
    () => [
      {
        id: "Active",
        label: "Active",
        value: "Active",
        color: theme.primary.main,
        borderColor: theme.gray.g200,
        disabled: disabled,
      },
      {
        id: "InActive",
        label: "InActive",
        value: "InActive",
        color: theme.primary.main,
        borderColor: theme.gray.g200,
        disabled: disabled,
      },
    ],
    []
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formBox}>
        <CustomizedTextInput
          value={firstName}
          onChangeText={(value) => setFormField("firstName", value)}
          placeholder={"Enter your first name"}
          title={"First Name"}
          disabled={disabled}
        />
        <CustomizedTextInput
          value={lastName}
          onChangeText={(value) => setFormField("lastName", value)}
          placeholder={"Enter your last name"}
          title={"Last Name"}
          disabled={disabled}
        />
        <CustomizedRadioGroup
          radioButtons={radioButtons}
          selectedId={status}
          setSelectedId={(value) => setFormField("status", value)}
          title={"Status"}
          disabled={disabled}
        />
        <CustomizedSelector
          title={"Region"}
          selectedValue={region}
          onChange={(value) => setFormField("region", value)}
          disabled={disabled}
        />
        {(IsEmpty(firstName) || IsEmpty(lastName)) && (
          <Text style={styles.validationText}>
            Please note that the form cannot be submitted if any filed is empty.
          </Text>
        )}
      </View>
      <View style={styles.buttonsBox}>
        <CustomButton
          text={
            [INPROGRESS, REQUESTING].includes(stateStatus)
              ? "Loading..."
              : route.name === "Edit Customer"
              ? "Edit"
              : route.name === "Show Customer"
              ? "Back"
              : "Create"
          }
          isFilled={true}
          onPress={handleSubmit}
          disabled={
            [INPROGRESS, REQUESTING].includes(stateStatus) ||
            IsEmpty(firstName) ||
            IsEmpty(lastName)
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomerForm;
