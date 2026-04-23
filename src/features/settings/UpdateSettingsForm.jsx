import { useForm } from "react-hook-form";
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { FormRow } from "../../ui/FormRow";
import Row from "../../ui/Row";
import useSettings from "./hooks/useSettings";
import Spinner from "../../ui/Spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import useUpdateSettings from "./hooks/useUpdateSettings";

const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const { settingsData, isLoadingSettigs } = useSettings();
  const { updateSettingsMutate, isPending } = useUpdateSettings();

  const {
    minBookingLength,
    maxBookingLength,
    maxNumberOfGuests,
    mealPrice,
    minRoom,
    minPrice,
  } = settingsData || {};

  function handleUpdateSettings(event, fieldName) {
    const fieldValue = event.target.value;
    if (!fieldValue) return;
    console.log(fieldValue);
    updateSettingsMutate({ [fieldName]: fieldValue });
  }

  if (isLoadingSettigs) return <Spinner />;
  return (
    <Form>
      <Row type="horizontal">
        <FormRow>
          <Label htmlFor="minBookingLength">Min Booking Length</Label>
          <Input
            type="number"
            id="minBookingLength"
            defaultValue={minBookingLength}
            onBlur={(event) => handleUpdateSettings(event, "minBookingLength")}
            disabled={isPending}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="maxBookingLength">Max Booking Length</Label>
          <Input
            type="number"
            id="maxBookingLength"
            defaultValue={maxBookingLength}
            onBlur={(event) => handleUpdateSettings(event, "maxBookingLength")}
            disabled={isPending}
          />
        </FormRow>
      </Row>
      <Row type="horizontal">
        <FormRow>
          <Label htmlFor="Number of Guests">Max Number of Guest</Label>
          <Input
            type="number"
            id="maxNumberOfGuests"
            defaultValue={maxNumberOfGuests}
            onBlur={(event) => handleUpdateSettings(event, "maxNumberOfGuests")}
            disabled={isPending}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="Number of Guests">Min Number of rooms</Label>
          <Input
            type="number"
            id="minRoom"
            defaultValue={minRoom}
            onBlur={(event) => handleUpdateSettings(event, "minRoom")}
            disabled={isPending}
          />
        </FormRow>
      </Row>
      <Row>
        <FormRow>
          <Label htmlFor="mealPrice">Min Price</Label>
          <Input
            type="number"
            id="minPrice"
            defaultValue={minPrice}
            onBlur={(event) => handleUpdateSettings(event, "minPrice")}
            disabled={isPending}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="mealPrice">Price</Label>
          <Input
            type="number"
            id="mealPrice"
            defaultValue={mealPrice}
            onBlur={(event) => handleUpdateSettings(event, "mealPrice")}
            disabled={isPending}
          />
        </FormRow>
      </Row>
      <FormRow></FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
