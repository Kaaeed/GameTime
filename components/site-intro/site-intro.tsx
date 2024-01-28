import Image from "next/image";

import SiteLogo from "../../public/logo/Logo_1.png";

export default function SiteIntro() {
  return (
    <div className="bg-gradient-to-tr from-neutral-900 to-neutral-400 py-20 flex justify-center">
      <section className="flex w-9/12 flex-col xl:flex-row">
        <div className="flex-1">
          <Image src={SiteLogo} alt="Site logo" />
        </div>
        <article className="flex-1">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est
            eligendi hic quibusdam velit quam dolorum ducimus possimus explicabo
            voluptates animi, laudantium porro officiis officia doloribus minus
            sed similique dignissimos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi, natus? Obcaecati voluptate odio id ut
            repellendus. Nihil et accusantium libero saepe voluptate, quasi
            maiores omnis, doloribus velit ipsum ea error? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit veritatis in unde
            quaerat, nostrum, dicta, voluptatum facilis sit distinctio magnam
            quod assumenda dolore tenetur quas delectus doloremque minus nulla
            non. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque optio, voluptatibus esse soluta ipsa nemo nesciunt itaque
            vitae corporis at, eius voluptatum, odio quia veritatis hic vel quos
            amet eveniet.
          </p>
        </article>
      </section>
    </div>
  );
}
