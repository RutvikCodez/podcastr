export type podcastDataType = {
  id: string;
  title: string;
  description: string;
  imgURL: string;
  views: number;
  voicePrompt: string;
  imagePrompt: string;
  isOwner?: boolean;
  authorId?: string;
  authorImageUrl?: string;
  author?: string;
};

export type typeWithRenderField<T> = T & {
  control: Control<z.infer<formSchema>>; // remain
  form?: {
    getValues: UseFormGetValues<unknown>;
    watch: UseFormWatch<unknown>;
    setValue: UseFormSetValue<unknown>;
  };
};

export type commonConfig = {
  label: string;
  placeholder: string;
  className?: string;
  cns?: {
    label?: string;
    input?: string;
    formItem?: string;
    container?: string;
  };
  readonly name: string;
  disabled?: boolean;
  onChange?: (e: unknown) => void;
  defaultValue?: string;
  validation: z.ZodType<unknown, unknown, unknown>;
};

export type magicFieldInputConfing = {
  type: HTMLInputTypeAttribute;
  fileRef?: unknown;
};

export type magicFieldInput = {
  type: "input";
  config: commonConfig & magicFieldInputConfing;
};

export type magicFieldTextareaConfing = {
  cols: number;
  rows: number;
};

export type magicFieldTextarea = {
  type: "textarea";
  config: commonConfig & magicFieldTextareaConfing;
};

export type magicFieldSelectConfig = {
  options: () => optionType[] | Promise<optionType[]>;
  conditionalOptions?: {
    fieldName: string;
    fn: (data: string) => optionType[] | Promise<optionType[]>;
  };
};

export type magicFieldSelect = {
  type: "select";
  config: commonConfig & magicFieldSelectConfig;
};

export type InputFieldWithRenderFields = Partial<
  typeWithRenderField<magicFieldInput["config"]>
>;

export type TextAreaFieldWithRenderFields = Partial<
  typeWithRenderField<magicFieldTextarea["config"]>
>;

export type SelectFieldWithRenderFields = Partial<
  typeWithRenderField<magicFieldSelect["config"]>
>;

export type inputFieldWithRenderFieldFn =
  FunctionComponent<InputFieldWithRenderFields>;

export type textAreaFieldWithRenderFieldFn =
  FunctionComponent<TextAreaFieldWithRenderFields>;

export type selectFieldWithRenderFieldFn =
  React.FunctionComponent<SelectFieldWithRenderFields>;

export type renderComponent =
  | inputFieldWithRenderFieldFn
  | textAreaFieldWithRenderFieldFn
  | selectFieldWithRenderFieldFn;

export type optionType = { value: string; label: string | ReactNode };

export type magicField = Readonly<
  (magicFieldInput | magicFieldTextarea | magicFieldSelect) & {
    RenderComponent: renderComponent;
  }
>;

export type TabDataType = {
  label: string;
  value: string;
  content: React.JSX.Element;
};

export type emptyStateType = {
  title: string;
  buttonLink: string;
  buttonText: string;
};

export type headertype = {
  title: string;
  titleClassName?: string;
};

export type TopPodcastersProps = {
  id: string;
  creationTime: number;
  email: string;
  imageUrl: string;
  clerkId: string;
  name: string;
  podcast: {
    podcastTitle: string;
    podcastId: string;
  }[];
  totalPodcasts: number;
};

export type carouselProps = {
  fansLikeDetails: TopPodcastersProps[];
};

export type AudioProps = {
  title: string;
  audioUrl: string;
  author: string;
  imageUrl: string;
  podcastId: string;
};

export type AudioContextType = {
  audio: AudioProps | undefined;
  setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>;
};
