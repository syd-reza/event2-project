import LoginPage from "./login/page";
import OfflineNotice from "@/conponents/OfflineNotice/OfflineNotice";

export default function Home() {
  return (
    <OfflineNotice>
      <div>
        <LoginPage />
      </div>
    </OfflineNotice>
  );
}
