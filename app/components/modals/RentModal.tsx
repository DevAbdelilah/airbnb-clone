"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  INSCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [StereoPannerNode, setStep] = useState(STEPS.CATEGORY);

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Airbn your home!"
    />
  );
};

export default RentModal;
