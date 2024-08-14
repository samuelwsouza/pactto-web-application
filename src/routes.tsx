import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/Defaultlayout";
import { Dashboard } from "./app/dashboard/dashboard";
import { PacttoChats } from "./app/dashboard/pactto-chats";
import { ReviewItems } from "./app/dashboard/review-items";
import { WebLinks } from "./app/dashboard/web-links";
import { PersonalInfo } from "./app/dashboard/personal-information";
import { ReviewPackages } from "./app/dashboard/review-packages";
import { PacttoWebsite } from "./app/dashboard/pactto-website";
import { VideoLibrary } from "./app/dashboard/video-library";
import { Subscription } from "./app/dashboard/subscription";
import { Settings } from "./app/dashboard/settings";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chats" element={<PacttoChats />} />
        <Route path="/reviewitems" element={<ReviewItems />} />
        <Route path="/weblinks" element={<WebLinks />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/reviewpackages" element={<ReviewPackages />} />
        <Route path="/website" element={<PacttoWebsite />} />
        <Route path="/videolibrary" element={<VideoLibrary />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}