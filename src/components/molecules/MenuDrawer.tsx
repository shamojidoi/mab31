import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay
  } from "@chakra-ui/react";
  import { memo, VFC } from "react";
  
  type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickMental: () => void;
    onClickFijical: () => void;
    onClickTecnic: () => void;
    onClickSetting: () => void;
    onClickUserManagement: () => void;

  };
  
  export const MenuDrawer: VFC<Props> = memo((props) => {
    const {
      onClose,
      isOpen,
      onClickHome,
      onClickMental,
      onClickFijical,
      onClickTecnic,
      onClickSetting,
      onClickUserManagement
    } = props;
    return (
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={onClickHome}>
                TOP
              </Button>
              <Button w="100%" onClick={onClickMental}>
                メンタル
              </Button>
              <Button w="100%" onClick={onClickFijical}>
                フィジカル
              </Button>
              <Button w="100%" onClick={onClickTecnic}>
                テクニック
              </Button>
              <Button w="100%" onClick={onClickSetting}>
                設定
              </Button>
              <Button w="100%" onClick={onClickUserManagement}>
                ユーザー一覧
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  });
  