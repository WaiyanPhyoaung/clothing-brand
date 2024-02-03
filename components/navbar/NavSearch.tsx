import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@mantine/hooks";

function NavSearch({
  isSearch,
  setIsSearch,
}: {
  isSearch: boolean;
  setIsSearch: (arg: boolean) => void;
}) {
  const ref = useClickOutside(() => setIsSearch(false));

  return (
    <AnimatePresence>
      {isSearch && (
        <motion.div
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(2px)",
            transition: { duration: 1 },
          }}
          className="fixed top-0 z-[1001]  h-screen w-screen "
        >
          <motion.div
            ref={ref}
            initial={{ y: "-100%" }}
            animate={{
              y: "0",
              transition: { duration: 0.2 },
            }}
            exit={{ y: "-100%", transition: { duration: 0.2 } }}
            className="bg-white h-[30vh]"
          >
            <div className="container flex justify-between pt-4">
              <p className="w-1/6">LOGO</p>
              <Input className="w-3/6" autoFocus />
              <div className="w-1/6 text-right">
                <Button variant="ghost" onClick={() => setIsSearch(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default NavSearch;
