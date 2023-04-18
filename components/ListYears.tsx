interface Props {
  years: string;
  institution: string;
  info: string;
}

const ListYears = ({ years, institution, info }: Props) => (
  <li>
    <div className="grid grid-cols-[minmax(200px,auto)_minmax(0,1fr)]">
      <div className="pr-[20px]">
        <span className="inline-block whitespace-nowrap rounded-[50px] bg-gray-200 px-4 py-1 text-sm">
          {years}
        </span>
      </div>
      <div>
        <h3 className="font-semibold">{institution}</h3>
        <span className="text-sm">{info}</span>
      </div>
    </div>
  </li>
);

export default ListYears;
