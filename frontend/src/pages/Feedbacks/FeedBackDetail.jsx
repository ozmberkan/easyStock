import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactById } from "~/redux/slices/contactSlice";

const FeedBackDetail = () => {
  const { id } = useParams();

  const { contact } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, []);

  console.log(contact);

  return <div>Detail</div>;
};

export default FeedBackDetail;
