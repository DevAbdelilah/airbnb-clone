"use client";

import { Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from "@/types";
import { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { eachDayOfInterval } from "date-fns";

const initialDateRange ={

  startDate: new Date(),
  endDate:new Date(),
  key:'selection' 
}

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservation =[],
  currentUser,
}) => {

  const loginModal = useLoginModal();
  const router =useRouter();

const disabledDates = useMemo(()=>{

  let dates :Date[]=[];
reservation.forEach((reservation)=>{
const range =eachDayOfInterval({
start:new Date(reservation.startDate),
end:new Date(reservation.endDate)

});

dates =[...dates,...range]

})

return dates
},[reservation])



  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
<div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">

<ListingInfo
user={listing.user}
category={category}
description={listing.description}
roomCount ={listing.roomCount}
guestCount ={listing.guestCount}
bathroomCount={listing.bathroomCount}
locationValue={listing.locationValue}

/>
</div>

        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
