export default function VideoCard({ src, name, description }: { src: string, name: string, description: string }) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <iframe
            id="panda-527e4247-193a-4d1b-8d22-7481982fdb10"
            src={src}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen
            className="rounded-xl w-full h-60">
          </iframe>
          <div className="flex flex-col text-center">
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-zinc-600">{description}</p>
          </div>
        </div>
    )
}