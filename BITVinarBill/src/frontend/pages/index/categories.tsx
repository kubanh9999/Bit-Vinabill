import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "state";
import { useNavigate } from "react-router";

export const Categories: FC = () => {
  const categories = useRecoilValue(categoriesState);

  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };

  const sortedCategories = [...categories].sort((a, b) => {
    if (a.name === "Đậu") return -1;
    if (b.name === "Đậu") return 1;
    return 0;
  })
  
  return (
    <Box className="bg-white grid grid-flow-col auto-cols-max gap-2 p-5 w-screen overflow-x-auto">
    {sortedCategories?.map((category, i) => (
      <div
        key={i}
        onClick={() => gotoCategory(category.id)}
        className="flex flex-col space-y-1 items-center"
      >
        <img className="w-12 h-12" src={category.icon} alt={category.name} />
        <Text
  size="xxSmall"
  className="text-gray text-center break-words w-full max-w-[100px]">
  {category.name}
</Text>
      </div>
    ))}
  </Box>
  
  );
};
