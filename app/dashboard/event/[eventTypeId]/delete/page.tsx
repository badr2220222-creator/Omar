import { DeleteEventTypeAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const DeleteEventType = ({ params }: { params: { eventTypeId: string } }) => {
const t = useTranslations('neweventtypes');
  return (
    <div className="flex-1 flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{t("deleteeventtype")}</CardTitle>
          <CardDescription>
            {t("deleteconfirmation")}
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button asChild variant="secondary">
            <Link href="/dashboard">{t("cancel")}</Link>
          </Button>
          <form action={DeleteEventTypeAction}>
            <input type="hidden" name="id" value={params.eventTypeId} />
            <Button variant="destructive">{t("delete")}</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeleteEventType;
