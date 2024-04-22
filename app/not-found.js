import NotFoundPage from "@/components/Notfound/NotFoundPage"
import GlobalLayout from "@/layout/GlobalLayout"

const page = () => {
    return (
        <GlobalLayout page={<NotFoundPage />} />

    )
}

export default page