import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRoom } from "../../services/apirooms";
import toast from "react-hot-toast";
import Heading from "../../ui/Heading";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateRoomForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isAddingRoom } = useMutation({
    mutationFn: addRoom,
    onSuccess: () => {
      toast.success("Room added successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmitForm(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(error) {}

  return (
    <Form onSubmit={handleSubmit(onSubmitForm, onError)}>
      <Heading as="h2">Add a Room</Heading>
      <FormRow>
        <Label htmlFor="roomNumber">Room Number</Label>
        <Input
          type="number"
          id="roomNumber"
          {...register("roomNumber", {
            required: "Room number must be provided",
          })}
        />
        {errors?.roomNumber?.message && (
          <Error>{errors?.roomNumber?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="roomType">Room Type</Label>
        <Input
          type="text"
          id="roomType"
          {...register("roomType", {
            required: "Room type is required",
          })}
        />
        {errors?.roomType?.message && (
          <Error>{errors?.roomType?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="roomSize">Room Size (m²)</Label>
        <Input type="number" id="roomSize" {...register("roomSize")} />
        {errors?.roomSize?.message && (
          <Error>{errors?.roomSize?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="bedType">Bed Type</Label>
        <Input type="text" id="bedType" {...register("bedType")} />
        {errors?.bedType?.message && <Error>{errors?.bedType?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxcapacity"
          {...register("maxcapacity", {
            required: "Room capacity must be provided",
            min: {
              value: 1,
              message: "Room capacity should be at least 1",
            },
            max: {
              value: 8,
              message: "The maximum capacity is 8",
            },
          })}
        />
        {errors?.maxcapacity?.message && (
          <Error>{errors?.maxcapacity?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="floor">Floor</Label>
        <Input
          type="number"
          id="floor"
          {...register("floor", {
            required: "Floor must be provided",
          })}
        />
        {errors?.floor?.message && <Error>{errors?.floor?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Price must be provided",
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors?.regularPrice?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              value < getValues().regularPrice ||
              "discount should be less than the regular price",
          })}
        />
        {errors?.discount?.message && (
          <Error>{errors?.discount?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="isAvailable">Available</Label>
        <Input
          type="checkbox"
          id="isAvailable"
          {...register("isAvailable", {
            required: "This field is required",
          })}
        />
        {errors?.isAvailable?.message && (
          <Error>{errors?.isAvailable?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="amenities">Amenities</Label>
        <Textarea
          id="amenities"
          placeholder="e.g. wifi, tv, balcony..."
          {...register("amenities")}
        />
        {errors?.roomNumber?.message && (
          <Error>{errors?.roomNumber?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Room Description</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", {
            required: "Room number must be provided",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Room photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "Image url must be provided",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" size="small">
          Cancel
        </Button>
        <Button variation="primary" size="small" disabled={isAddingRoom}>
          Add Room
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;
