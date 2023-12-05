import { items } from "../../data";

export default function Items() {
    return (
      <div>
        {items.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    )
  }