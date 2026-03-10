import NotFoundPage from "@/components/Notfound/NotFoundPage"
import GlobalLayout from "@/layout/GlobalLayout"

export const dynamic = 'force-static';

const page = () => {
    return (
        <GlobalLayout page={<NotFoundPage />} />

    )
}

export default page