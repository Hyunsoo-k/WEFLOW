'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './ContactFormContainer.module.scss';

type FormData = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  content: string;
};

export const ContactFormContainer = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    budget: '',
    content: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let nextValue = value;
    
    if (name === 'name') {
      nextValue = value.replace(/[^가-힣a-zA-Z\s]/g, '');
    }

    if (name === 'phone') {
      nextValue = value.replace(/\D/g, '');
    }
    if (name === 'budget') {
      nextValue = value.replace(/\D/g, '');
    }

    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      alert('성함을 입력해주세요.');
      return false;
    }

    if (!form.phone.trim()) {
      alert('전화번호를 입력해주세요.');
      return false;
    }

    if (!form.email.trim()) {
      alert('이메일을 입력해주세요.');
      return false;
    }

    if (!form.content.trim()) {
      alert('문의 내용을 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      alert('문의가 접수되었습니다.');

      setForm({
        name: '',
        phone: '',
        email: '',
        budget: '',
        content: '',
      });
    } catch (error) {
      console.error(error);
      alert('문의 접수에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formWrapper}>
        <header className={styles.header}>
          <h3 className={styles.title}>프로젝트 문의</h3>
          <span className={styles.desc}>
            문의하시고 싶으신 내용을 입력해 주세요.
          </span>
        </header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.fieldset}>
            <label htmlFor='name' className={styles.label}>
              성함
            </label>
            <input
              id='name'
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
              className={styles.input}
              autoComplete='name'
              spellCheck={false}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label htmlFor='phone' className={styles.label}>
              전화번호
            </label>
            <input
              id='phone'
              name='phone'
              type='tel'
              inputMode='numeric'
              value={form.phone}
              onChange={handleChange}
              className={styles.input}
              autoComplete='tel'
              spellCheck={false}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label htmlFor='email' className={styles.label}>
              이메일
            </label>
            <input
              id='email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              autoComplete='email'
              spellCheck={false}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label htmlFor='budget' className={styles.label}>
              예산
            </label>
            <input
              id='budget'
              name='budget'
              type='text'
              inputMode='numeric'
              value={form.budget}
              onChange={handleChange}
              className={styles.input}
              autoComplete='off'
              spellCheck={false}
              placeholder='숫자만 입력'
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label htmlFor='content' className={styles.label}>
              문의 내용
            </label>
            <textarea
              id='content'
              name='content'
              value={form.content}
              onChange={handleChange}
              className={styles.textarea}
              autoComplete='off'
              spellCheck={false}
              rows={5}
            />
          </fieldset>
          <button
            type='submit'
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? '접수 중...' : '문의하기'}
          </button>
        </form>
      </div>
    </div>
  );
};
