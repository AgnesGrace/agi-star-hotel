import styled from "styled-components";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAndEditRoom } from "../../services/apirooms";
import Heading from "../../ui/Heading";
import useAddRoom from "./hooks/useAddRoom";
import Spinner from "../../ui/Spinner";
import { FormRow } from "../../ui/FormRow";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateRoomForm({ clickedRoom = {} }) {
  const isEditingSession = Boolean(clickedRoom.id);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditingSession ? clickedRoom : {},
  });

  const { addRoomMutate, isAddingRoom } = useAddRoom();

  const { errors } = formState;

  const queryClient = useQueryClient();

  /*Edit a room*/
  const { mutate: editRoomMutate, isLoading: isEditingRoom } = useMutation({
    mutationFn: ({ newRoomData, id }) => addAndEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("Room edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmitForm(data) {
    const imagePath =
      typeof data.image === "string" ? data.image : data.image[0];
    if (isEditingSession) {
      console.log("edit");
      editRoomMutate({
        newRoomData: { ...data, image: imagePath },
        id: clickedRoom.id,
      });
    } else {
      addRoomMutate({ ...data, image: imagePath });
    }
  }

  function onError(error) {
    //handle this part later
  }

  const isFormWorking = isAddingRoom || isEditingRoom;
  console.log(isAddingRoom, "isadd");

  return (
    <>
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
          {errors?.bedType?.message && (
            <Error>{errors?.bedType?.message}</Error>
          )}
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
                Number(value) < Number(getValues().regularPrice) ||
                "discount should be less than the regular price",
            })}
          />
          {errors?.discount?.message && (
            <Error>{errors?.discount?.message}</Error>
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
          <Label htmlFor="isAvailable">Available</Label>
          <Input
            type="checkbox"
            id="isAvailable"
            {...register("isAvailable")}
          />
          {errors?.isAvailable?.message && (
            <Error>{errors?.isAvailable?.message}</Error>
          )}
        </FormRow>
        <FormRow>
          <Label htmlFor="image">Room photo</Label>
          <FileInput
            id="image"
            accept="image/*"
            {...register("image", {
              required: isEditingSession ? false : "Image url must be provided",
            })}
          />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="reset" size="small">
            Cancel
          </Button>
          <Button variation="primary" size="small">
            {!isEditingRoom ? "Add Room" : "Edit Room"}
          </Button>
        </FormRow>
        {isAddingRoom && <Spinner fullScreen />}
      </Form>
    </>
  );
}

export default CreateRoomForm;
