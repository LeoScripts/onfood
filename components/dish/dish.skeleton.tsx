import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function DishSkeleton() {
  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#eee">
      <div>
        <Skeleton  count={1} height={200} width="100%" style={{ marginBottom: "20px" }}/>
      </div>
    </SkeletonTheme>
  )
}