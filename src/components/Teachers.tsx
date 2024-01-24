import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";

export default function Teachers() {
  const teachersInfo: Array<TeacherInfo> = [
    {
      name: "Елена Ивановна",
      avatarPath: "..\\..\\static\\img\\c7pgvODrpjk.jpg",
      description:
        "Информационные технологии подобны волшебству: они могут изменить мир, если мы научимся правильно их использовать",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Сан Саныч",
      avatarPath: "..\\..\\static\\img\\iHLEV1xBQb4.jpg",
      description:
        "Чем больше мы знаем о компьютерах, тем меньше они знают о нас",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Иван Иваныч",
      avatarPath: "..\\..\\static\\img\\X5mRv-TSnR0.jpg",
      description:
        "Информационные технологии - это не только инструменты, но и возможности для обучения и развития",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Денис Андреевич",
      avatarPath: "..\\..\\static\\img\\7KUmsrWGDKM.jpg",
      description:
        "Творчество и инновации в сфере информационных технологий способны трансформировать мир и сделать его лучше, но только при условии гармоничного и продуманного развития технологий",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Владимир Ильич",
      avatarPath: "..\\..\\static\\img\\DedKlochkov.jpg",
      description:
        "Использование информационных технологий может быть опасным, если не подходить к ним с должной ответственностью и не соблюдать правила безопасности",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Тамара Петровна",
      avatarPath: "..\\..\\static\\img\\DevaKlochkov1.jpg",
      description:
        "В мире информационных технологий границы между знанием и незнанием стираются, поэтому постоянное обучение и самосовершенствование становятся неотъемлемой частью успеха",
      jobTitle: "преподаватель УдГУ",
    },
    {
      name: "Галина Ивановна",
      avatarPath: "..\\..\\static\\img\\DevaKlochkov2.jpg",
      description:
        "Информационные технологии - это не просто новые инструменты, но и новый образ мышления, позволяющий решать проблемы быстрее и эффективнее",
      jobTitle: "преподаватель УдГУ",
    },
  ];

  return (
    <div className="flex flex-nowrap snap-x snap-mandatory overflow-x-auto no-scrollbar gap-5 px-16">
      {teachersInfo.map((info, index) => (
        <Card shadow={false} className="w-72 flex-none snap-center snap-always" key={index}>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src={info.avatarPath}
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <Typography variant="h5" color="blue-gray">
                {info.name}
              </Typography>
              <div className="5 flex items-center gap-0">
                <Rating value={5} readonly={true} />
              </div>
              <Typography color="blue-gray">{info.jobTitle}</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>{info.description}</Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

interface TeacherInfo {
  name: string;
  avatarPath: string;
  description: string;
  jobTitle: string;
}
