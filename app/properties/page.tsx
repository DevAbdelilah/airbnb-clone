import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


type Props = {};

const ProprietiesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No proprieties found"
          subtitle="Looks like you have no proprieties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient currentUser={currentUser} listings={listings}  />
    </ClientOnly>
  );
};

export default ProprietiesPage;
